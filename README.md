# Joebe Generator

Your #1 Source for Joebe content.

![Joebe Generator](https://github.com/nafeu/joebe-generator/blob/main/opengraph-image.png?raw=true)

## Installation

```
git clone https://github.com/nafeu/joebe-generator.git
cd joebe-generator
```

## Development

Use a local webserver of your choice:

```
python3 -m http.server
```

or

```
browser-sync --watch
```

## Contributing

### Adding more Joebe Quotes

Open the `data.js` file and examine the format

```javascript
const GENERATOR = [
  {
    text: `This is a quote by |PERSON|`
    lookup: [
      {
        id: 'PERSON',
        default: 'PersonA',
        variations: ['PersonB', 'PersonC']
      }
    ]
  }
  ...
]
```

- `text` is the base quote which includes IDs within pipe symbols (`|ID|`) for parts of the quote you want to create variations of
- `lookup` is a collection which maps the IDs to the default values and variations they can be

Append more objects of this format to the root `GENERATOR` variable to add them into the quote rotation.


## License

[MIT](https://choosealicense.com/licenses/mit/)