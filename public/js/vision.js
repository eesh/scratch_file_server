const iconURI = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEhUQDxMREg0VEBISEA8VFg8TEBAQFRUWFhUWFRUZHSkhGBslGxUVITEhJSk3MC4uFx8zODMtNyguLisBCgoKDg0OGhAQFyslHiUrLS0rKys3LS0rNystKy04Kys3LCs3NzctKy8rKzc3Ky0rKy03LS03LSstLS4tLisrLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQQDAAAAAAAAAAAAAAAABwQFBggBAgP/xABHEAABAwIDBAYECwQJBQAAAAABAAIDBBEFITEGBxJBEyJRYXGRMkJygQgUI1JigqGxssHRJDNTkkNEY4OTosLh8DRFVYTS/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EAB8RAQACAgMBAAMAAAAAAAAAAAABAgMRBBIxIRMiQf/aAAwDAQACEQMRAD8AnFERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQES66l4QdkVDiGLU8DeknliijHryPaxvm4rB8a3z4RBcRvlqXg2tCzqg+28tBHeLoJGRQLiu/8AmNxSUcbPmvme+S472MDbeaxev3y41J6M0cI7I4ovvkDj9qDaJFqFV7wcYk9Kuqh7EjovwWVC/avEjrW1p8aioP8AqQblotMhtPiA0rKwf38//wBL2Ztjig0r64f+xUW8uJBuOi1Mpd6GNx+jWyn22wyfjaVkWG79MUYR0zKadvrXY+OQ+DmusP5UGyKKJcB370Elm1kM1K46vbaeId5IAd5NKkzB8ZpqpnS0k0c0fNzHB3CdbOGrT3HNBXIiICIiAiIgIiICIiAiIgIi4JQcrxmqA3Uqx7V7V0tFGZamQMGjW6veexjRmT93OygHbLetWVRMdMTTUxyuD8u8d7h6Pg3zKCZdq95NDR3bJJxTDSCOz5PeNG+8hRFtHvlr5rtpQ2mj5OykmI9oiw9w96jVxJzOZOZPMlcIKmvr5pn9JPJJLIfXe5z3eZVMiICIiAiIgKswuohY/inh6dn8PjfH/mbmqNEEjYJtPs43/qcHkafnMqJp7/Vkc0BSFgFXsfUkMjipY5Da0c7HRG50HG/qk9wctd0Q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';

//server info
let classifyURL = 'https://cognimate.me:2635/vision/classify';
let updateURL = 'https://cognimate.me:2635/vision/updateClassifier';

//classifier_id
let classifier_id;
let api_key;

//for parsing image response
let watson_response; //the full response
let classes; //the classes and scores returned for the watson_response
let image_class; //the highest scoring class returned for an image

//response when updating a classifier
let update_response;

//image that user takes
let imageData;

class ServerVision {
    constructor (runtime) {
        /**
         * The runtime instantiating this block package.
         * @type {Runtime}
         */
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'serverVision',
            name: 'Image Training from Server',
            blockIconURI: iconURI,
            blocks: [
                {
                    opcode: 'setAPI',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Set API key to [KEY]',
                    arguments:{
                        KEY:{
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'key'
                        }
                    }
                },
                {
                    opcode: 'getModelfromString',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Choose image model: [IDSTRING]',
                    //[THIS] needs to be equal to THIS in arguments
                    arguments: {
                        IDSTRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'model id'
                        }
                    }
                },
                {
                    opcode: 'takePhoto',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Take photo from webcam'
                },
                {
                    opcode: 'urlPhoto',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Search image using link [URL]',
                    arguments:{
                        URL: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'add link here'
                        }
                    }
                },
                {
                    opcode: 'recognizeObject',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'What do you see in the photo?',
                },
                {
                    opcode: 'recognizeObjectCommand',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Search prediction for your photo',
                },
                {
                    opcode: 'getScore',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'How sure are you the photo is a [CLASS]?',
                    arguments:{
                        CLASS: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'add category here'
                        }
                    }
                },
                {
                    opcode:'trackLabel',
                    blockType: Scratch.BlockType.HAT,
                    text: 'When image is [LABEL]',
                    arguments:{
                        LABEL:{
                            type: Scratch.ArgumentType.STRING, 
                            defaultValue: 'add category here'
                        }
                    }
                },
                {
                    opcode: 'clearResults',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Clear results'
                },
                {
                    opcode: 'updateClassifier',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'Add photo to [LABEL]',
                    arguments:{
                        LABEL:{
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'category name'
                        }
                    }
                }

            ],
        };
    }

    getModelfromString (args, util){
        if(args.IDSTRING !== 'classifier id'){
            classifier_id = args.IDSTRING;
        }
    }

    getScore(args, util){
        //check that classes is not empty
        if(classes === null){
            return 'did you classify an object yet?'
        }
        var comparison_class = args.CLASS.toLowerCase();
        //make sure the class entered is valid
        console.log(classes);
        console.log(comparison_class);
        if(!classes.hasOwnProperty(comparison_class)){
            return 'this is not a valid class'
        }
        return classes[comparison_class];
    }

    takePhoto (args, util) {
        console.log(this.runtime);
        imageData = this.runtime.ioDevices.video.getSnapshot();
        console.log(imageData);
    }

    recognizeObjectCommand(args, util){
        return this.recognizeObject();
    }

    recognizeObject(args,util) {
        if(imageData == null){
            return 'No Image set';
        }
        if(api_key == null){
            return 'No api key set';
        }
        if(classifier_id == null){
            return 'No Classifier ID set';
        }

        image_class = null
        let image = imageData;

        if (this._lastImage === image &&
            this._lastResult !== null) {
            return this._lastResult;
        }

        this._lastImage = image;
        const _this = this;
        let promise = new Promise((resolve)=>{
        this.classify(classifier_id, image,
            function(response) {
            if (response == null){
                console.log(err);
            }
            else {
                watson_response = JSON.parse(response.body, null, 2);
                console.log(watson_response);
                classes = {};
                //store everything
                for (var i = 0, length = watson_response.length; i < length; i++) {
                    classes[watson_response[i].class.toLowerCase()] = watson_response[i].score;
                }
                //figure out the highest scoring class
                var class_label;
                var best_score = 0;
                for (var key in classes) {
                    if (classes.hasOwnProperty(key)) {
                        if(classes[key]>best_score){
                            best_score = classes[key];
                            class_label = key;
                        }
                    }
                }

                image_class = class_label;
                _this._lastResult = image_class;
                resolve(image_class);
            }});
        });
        promise.then(output => output);

        return promise;
      }

    parseResponse(input){
        for (var i = 0, length = input.length; i < length; i++) {
            classes[input[i].class] = input[i].score;
        }
        //figure out the highest scoring class
        var class_label;
        var best_score = 0;
        for (var key in classes) {
            if (classes.hasOwnProperty(key)) {
                if(classes[key]>best_score){
                    best_score = classes[key];
                    class_label = key;
                }
            }
        }
        return class_label;
    }

    classify(classifier, image, callback) {
        var formData = JSON.stringify({classifier_id: classifier, image_data:image});

        if(image.substring(0,4) === 'data'){
            var url = new URL(classifyURL);
            var options = {
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json', // important header to be included henceforth
                    'apikey': api_key
                },
                body: formData
            };

            fetch(url, options).then((response) => {
                if (response.status === 200) {
                    response.json().then((responseJson) => {
                        callback(responseJson);
                    });
                }
                else {
                    callback(null);
                }
            }).catch((err) => {
                callback(null);
            });

        } else{
            var url = new URL("https://cognimate.me:2635/vision/classifyURLImage");
            var options = {
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json', // important header to be included henceforth
                    'apikey': api_key
                },
                body: formData
            };
            
            fetch(url, options).then((response) => {
                if (response.status === 200) {
                    response.json().then((responseJson) => {
                        callback(responseJson);
                    });
                }
                else {
                    callback(null);
                }
            }).catch((err) => {
                callback(null);
            });
        }
    }


    setAPI(args, util){
        api_key = args.KEY
    }

    urlPhoto(args,util){
        if(args.URL === 'add link here'){
            return 'invalid link'
        } else{
            imageData = args.URL;
        }
    }

    clearResults () {
        image_class = null;
        imageData = null;
        classes = {};
    }

    trackLabel(args, util){
        let label = args.LABEL;
        if(label == image_class){
            return true;
        } else {
            return false;
        }
    }
    updateClassifier(args, util){
        let category = args.LABEL;
        let promise = new Promise((resolve)=>{
            var formData = JSON.stringify({classifier_id: classifier_id, images:[imageData], class: category});
            this.updateRequest(formData, function(err, response) {
                if (err){
                    console.log(err);
                }
                else {
                    resolve(JSON.parse(response.body));
                }
            });
        });
        promise.then(output => output);
        return promise;
    }

    updateRequest(formData, callback){
        nets({
            url: updateURL,
            headers: {
            'apikey': api_key,
            'Content-Type': 'application/json' // important header to be included henceforth
            }, // couldn't figure out how to get x-url-encoded content-type to work
            method: 'POST',
            body: formData,
            encoding: undefined // This is important to get response as a string otherwise it returns a buffer array
        }, function(err, response){
            console.log(response);
            callback(err, response);
        });
    }

}

Scratch.extensions.register(new ServerVision());
