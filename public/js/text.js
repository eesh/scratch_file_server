const iconURI = 'data:image/png;base64,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';

// let base_url = 'https://cognimate.me:2636/nlc';
let base_url = 'https://cognimate.me:2635/nlc';
let read_api; 
let write_api;
let username; 
let classifier_name; //name of classifier to use
let class_name; //name of class that goes w/ the classifier
let results; //stores all results and probability
let label; //result with the highest probability

class Scratch3TextClassify {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'text',
            name: 'Text Training',
            blockIconURI: iconURI,
            blocks: [
                {
                    opcode: 'setReadAPI',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Set Read API key to [KEY]',
                    arguments:{
                        KEY:{
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'key'
                        }
                    }
                },
                {
                    opcode: 'setWriteAPI',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Set Write API key to [KEY]',
                    arguments:{
                        KEY:{
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'key'
                        }
                    }
                },
                {
                    opcode: 'setUsername',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Set username to [USER]',
                    arguments:{
                        USER:{
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'user'
                        }
                    }
                },
                {
                    opcode: 'getClassifier',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Choose text model: [IDSTRING]',
                    arguments: {
                        IDSTRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'model name'
                        }
                    }
                },
                {
                    opcode: 'getClass',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Set category to train: [CLASS]',
                    arguments: {
                        CLASS: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'category name'
                        }
                    }
                },
                {
                    opcode: 'trainText',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Send texts [TEXT] to train',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'insert text'
                        }
                    }
                },
                {
                    opcode: 'classifyText',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'What kind of phrase is [TEXT]?',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'phrase'
                        }
                    }
                },
                {
                    opcode: 'getScore',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'How sure are you the text is a [CLASS]?',
                    arguments:{
                        CLASS: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'add category here'
                        }
                    }
                },
                {
                    opcode: 'textHat',
                    blockType: Scratch.BlockType.HAT,
                    text: 'When text is [CLASS]',
                    arguments:{
                        CLASS: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'add category here'
                        }
                    }
                }
            ],
            menus: {
                models: ['Default','RockPaperScissors'],
            }
        };
    }

    setReadAPI(args, util){
        read_api = args.KEY;
    }

    setWriteAPI(args, util){
        write_api = args.KEY;
    }

    setUsername(args, util){
        username = args.USER;
    }

    getClassifier(args, util){
        classifier_name = args.IDSTRING;
    }

    getClass(args, util){
        class_name = args.CLASS;
    }

    classifyText(args, util, callback){
        //make sure everything necessary has been set
        if(read_api == null){
            return 'Set a Read API Key';
        } else if (username == null){
            return 'No username was set';
        } else if(classifier_name == null){
            return 'No classifier name was set';
        }

        let phrase = args.TEXT;

        if (this._lastPhrase === phrase &&
            this._lastResult !== null) {
            return this._lastResult;
        }

        this._lastPhrase = phrase;
        const _this = this;
        let promise = new Promise((resolve)=>{
            resolve(this.makeClassifyCall(phrase));
        });
        promise.then(output => output);

        return promise;
    }

    makeClassifyCall(phrase){
        var formData = { 
            classifier_id: classifier_name,
            classify_username: username,
            phrase: phrase,
            token: read_api
        };
        var url = new URL(base_url + "/classify/");
        var options = {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json' // important header to be included henceforth
            },
            body: formData
        };

        return fetch(url, options)
        .then((response) => {
            if (response.status === 200) {
                resp_result = JSON.parse(response.body, null, 2);
                results = {};
                //store everything
                for (var i = 0, length = resp_result.length; i < length; i++) {
                    results[resp_result[i].className.toLowerCase()] = resp_result[i].p;
                }
                //figure out the highest scoring class
                var class_label;
                var best_score = 0;
                for (var key in results) {
                    if (results.hasOwnProperty(key)) {
                        if(results[key]>best_score){
                            best_score = results[key];
                            class_label = key;
                        }
                    }
                }
                console.log(results);
                label = class_label;
            }
            else {
                console.log(response);
            }
        })
        .then(() => {
            return label;
        })
        .catch((err) => {
            return 'error predicting';
        });
    }

    trainText(args, util){
         //make sure everything necessary has been set
         if(write_api == null){
            return 'Set a Write API Key';
        } else if (class_name == null){
            return 'No class name was set';
        } else if(classifier_name == null){
            return 'No classifier name was set';
        }

        let phrase = args.TEXT;

        if (this._lastPhrase === phrase &&
            this._lastResult !== null) {
            return this._lastResult;
        }

        this._lastPhrase = phrase;
        const _this = this;
        let promise = new Promise((resolve)=>{
        this.makeTrainingCall(phrase,
            function(err, response) {
            if (err){
                console.log(err);
            }
            else {
                result = 'Text Data Sent';
                _this._lastResult = result;
                resolve(result);
            }});
        });
        promise.then(output => output);

        return promise;
    }

    makeTrainingCall(phrase, callback){
        var formData = JSON.stringify({ 
            classifier_name: classifier_name,
            class_name: class_name,
            texts: [phrase],
            write_token: write_api
        });

        nets({
            url: base_url + "/addExamples",
            headers: {
              'Content-Type': 'application/json' // important header to be included henceforth
            }, // couldn't figure out how to get x-url-encoded content-type to work
            method: 'POST',
            body: formData,
            encoding: undefined // This is important to get response as a string otherwise it returns a buffer array
          }, function(err, response){
                callback(err, response);
        });

    }

    getScore(args, util){
        //check that classes is not empty
        if(results === null){
            return 'did you classify any text yet?'
        }
        var comparison_class = args.CLASS.toLowerCase();
        console.log(results);
        //make sure the class entered is valid
        if(!results.hasOwnProperty(comparison_class)){
            return 'this is not a valid class'
        }
        return results[comparison_class];
    }

    textHat(args, util){
        let category = args.CLASS;
        if(label == category){
            return true;
        } else{
            return false;
        }
    }
}
// module.exports = Scratch3TextClassify;
Scratch.extensions.register(new Scratch3TextClassify());

