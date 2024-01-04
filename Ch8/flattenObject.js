{/**   

    Pronlem : Write an algorithm to flatten an object

    var dictionary = {
      'Key1': '1',
      'Key2': {
          'a' : '2',
          'b' : '3',
          'c' : {
              'd' : '3',
              'e' : '1'
          }
       }
    }

    Expected out put : {'Key1': '1', 'Key2.a': '2','Key2.b' : '3', 'Key2.c.d' : '3',
'Key2.c.e' : '1'}

Solution : iterate over any propery and recursively check it for child properties , passing in the concatenated string name
*/}

function flatenObject (dictionary){
    var flatennedDictionary = {}
    function flatennedDictionaryHelper(dictionary , propName){
        if(typeof dictionary != 'object'){
            flatennedDictionary[propName] = dictionary
            return 
        }
        for(var prop in dictionary){
            if(propName =''){
                flatennedDictionaryHelper(dictionary[prop] , propName+prop)
            }else{
                flatennedDictionaryHelper(dictionary,'')
                propName+'.'+prop
            }
        }
    }
    flatennedDictionaryHelper(dictionary ,'')
    return flatennedDictionary
}

console.log(flatenObject({
    'Key1': '1',
    'Key2': {
    'a' : '2',
    'b' : '3',
    'c' : {
    'd' : '3',
    'e' : '1'
    }
    }
    }));