# jsdiff-cli

JavaScript command line tool to get the difference in the files

## Getting Started
Install the module with: `npm install -g jsdiff-cli`

```javascript
jsdiff file1 file2
```

* ```file1``` is a file to compare.
* ```file2``` is a file to compare with.

## Documentation
jsdiff-cli is a simple command line tool which prints out the difference between two files using specific highlighting as follows,

1. The part highlighted in ```grey``` colour is the part which is unchanged.
2. The part highlighted in ```green``` colour is the part which is added.
3. The part highlighted in ```red``` colour is the part which is removed.

## Examples
_(Coming soon)_


## Reference
* jsdiff-cli makes use of [jsdiff](https://github.com/airportyh/jsdiff) library
* Also it is designed referring to an awesome [blog post](http://javascriptplayground.com/blog/2012/08/writing-a-command-line-node-tool/) for creating a command-line tool using ```nodejs``` and ```Grunt```

## License
Copyright (c) 2013 Kalpesh Adhatrao  
Licensed under the MIT license.
