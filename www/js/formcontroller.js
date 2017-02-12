angular.module('app')
    .controller('FormCtrl',FormCtrl) //controller for index.html

    function FormCtrl($scope,$injector){
    var validationProvider = $injector.get('$validation');
    // injector will inject the validation to this controller.
    configicons();
    $scope.submitform = submitform;
    // function for add custom icons to validation messages.
    function configicons(){
            validationProvider.setExpression({
            // set expression will set rules to the user define validation types.
                mod_required:function(value) {
                        return !!value;
                    },
            // mod_required is user define validation method for check value is not null
                mod_email:/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/        
            // mod_email is user define validation method for check value is email or not.
                });
            validationProvider.setDefaultMsg({
            //set Default Msg will set messages for user define validations. 
                mod_required:{
                    error: '<i class="fa fa-times-circle" aria-hidden="true" style="color:red;font-size:20px"></i>',
                    success: '<i class="fa fa-check-circle" aria-hidden="true" style="color:green;font-size:20px"></i>'},
            // set error and success messages for mod_required validation type.
                mod_email:{
                    error: '<i class="fa fa-envelope" aria-hidden="true" style="color:red;font-size:20px"></i>',
                    success: '<i class="fa fa-envelope" aria-hidden="true" style="color:green;font-size:20px"></i>'}
            // set error and sucess messages for mod_email validation type.
                    });
        }
      function submitform(user){   // check the validations of form 
            validationProvider.validate(user)
                .success(
               // sucess callback
                    function(){
                        console.log(user);
                    }
                  )
                .error(
                // error callback
                     function(){
                        console.log("error");
                    }  
                    )
            
        }
    }  

