const fs = require('fs');
const moment = require('moment');

const inputFile = 'dump.json';
const outputFile = 'output.json';



fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the input file:', err);
    return;
  }

  try {
    const jsonData = JSON.parse(data);

    jsonData.sort((a, b) => moment(a.timestamp).valueOf() - moment(b.timestamp).valueOf());

    const filteredData = jsonData
      .filter(
        item => item.content
          && item.content !== '@cs'
          && !item.content.match(/^@[\w\d]+$/)
          && !item.content.match(/https?:\/\/\S+/i)
      )
      .map(item => ({
        content: item.content
          .replace(/melissa/gi, 'gf')
          .replace(/@null/gi, '@CS'),
        timestamp: item.timestamp
      }));

    const groupedData = [];

    for (const item of filteredData) {
      const lastGroup = groupedData[groupedData.length - 1];
      if (!lastGroup || moment(item.timestamp).diff(moment(lastGroup[0].timestamp), 'minutes') > 2) {
        groupedData.push([item]);
      } else {
        lastGroup.push(item);
      }
    }

    const formattedData = [];

    for (const group of groupedData) {
      const messages = group.map(item => item.content);
      const timestamp = group[group.length - 1].timestamp;
      formattedData.push({ messages, timestamp });
    }

    const output = formattedData.map(item => ({
      text: item.messages.join('\n'),
      lookup: []
    }))

    fs.writeFile(outputFile, JSON.stringify(output, null, 2), err => {
      if (err) {
        console.error('Error writing the output file:', err);
      } else {
        console.log(`Filtered data saved to ${outputFile}`);
      }
    });
  } catch (parseError) {
    console.error('Error parsing the input JSON:', parseError);
  }
});
