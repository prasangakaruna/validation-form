/* 
 * This file contains JS for homePage Popup
 *  |--- init - Function Invoke!
 *  |--- 2  - alreadyMemberlogin
 *  |--- 3  - forgetPassword
 *  |--- 4  - createNewuser
 *  |--- 5  - backTomain
 *  |--- 6  - validateInputsOnNextRequired
 *  |--- 7  - validateInputsOnNextEmail
 *  |--- 8  - signUp 
 *  
 * developed Prasanga K
 * 
 */ 
/***************************************************tooltip plugin**********************************************/



(function ($, window, document, undefined) {
   
    userLogin  = {

        init:function ( settings ){
            
                    
            $('body').addClass('js');
        
            console.log('Function Invoke!');
            
          
            // Plugin default configuration
           
            userLogin.config = {
                defaultset:'Plugin Default',
                uiSettings : { 
                    inputError : {background: '#ffecec',border: '1px solid #ffc3c3'},
                    inputsuscess : {background: '#F3FFED', border: '1px solid #d7f7c7'},
                    inputFocusStylesNormal : {color: '#000', fontWeight: 'normal'},
                    inputFocusStyles : {color: '#000', fontWeight: 'bold'},
                    fadeIn: { display: 'block' },
                    fadeOut: { display: 'none' }
                },
                errorMsg : { 
                    empty_email: "Email can't be empty",
                    empty_pw: "Password can't be empty",
                    empty_cpw: "Confirm Password can't be empty",
                    pw_mismatch: "Password and Confirm Password Should be same."
                }
                
            };
            
            $.extend( userLogin.config, settings );
                       
            this.signUp_unlockExclusive_memberDeal = function () {
            
                $('.hider').css(userLogin.config.uiSettings.fadeOut);
                $('.form').css(userLogin.config.uiSettings.fadeIn);
                $('.backbtn').css(userLogin.config.uiSettings.fadeIn);
                
            },
            this.signUp_email = function () {
             
             console.log('signUp_social_Ormail');

            },
             this.alreadyMemberlogin = function () {
             
                $('.hider').css(userLogin.config.uiSettings.fadeOut);
                $('.loginwithemail').css(userLogin.config.uiSettings.fadeIn);
                $('.backbtn').css(userLogin.config.uiSettings.fadeIn);

            },
            this.forgetPassword = function () {
             
                $('.hider').css(userLogin.config.uiSettings.fadeOut);
                $('.forgetpassword').css(userLogin.config.uiSettings.fadeIn);
                $('.backbtn').css(userLogin.config.uiSettings.fadeIn);

            },
            this.createNewuser = function () {
              
                $('.hider').css(userLogin.config.uiSettings.fadeOut);
                $('.form').css(userLogin.config.uiSettings.fadeIn);
                $('.backbtn').css(userLogin.config.uiSettings.fadeIn);


            },
            this.backTomain = function (){
            
                $('.hider').css(userLogin.config.uiSettings.fadeOut);
                $('.defalut').css(userLogin.config.uiSettings.fadeIn);
                $('.backbtn').css(userLogin.config.uiSettings.fadeOut);
            
            },
           
                
             /*
              *   User Login       ******************************************************************
              */
                
                
            this.login = function (){
            
                console.log('userLogin Invoked!');
            
        
              /*
              *   if you validated any user fields please follow bellow methods ******************************************************************
              */
                
                userLogin.validateInputsOnNextRequired('.user-input-password');	
              
                userLogin.validateInputsOnNextEmail('.user-input-email');
                
                  
				if ( $('.user-input-email').hasClass('error-email-validation' ) ||  $('.user-input-password').hasClass('error-password-validation') )
				{
                     console.log('Invalid User Field!');
                }else{
                     console.log('Validated User Field!');
                }  
              //  Loading & disable button when call back end  
              //  $('.spinner').show();
    
                
            },
            // User forget password 
            this.forgetpassword = function (){
                
               console.log('forget password Invoked!');
                
                userLogin.validateInputsOnNextRequired('.user-input-forget-password');	
                
                
				if ( $('.user-input-forget-password').hasClass('error-forget-password-validation' ))
				{
                     console.log('Invalid User Field!');
                }else{
                     console.log('Validated User Field!');
                }              
                
            },   
                
            // here you can pass class id and validate your Required field
            this.validateInputsOnNextRequired = function (container) {
       
                
            $(container).each( function () {
                
			if ($(container).data('constrain')) {
               
                if ($(this).data('constrain')) {
                    
                    var $this = $(this),
                        value = $this.val(),
                        validationConstraints = $this.data('constrain'),
                        constraintsList = validationConstraints.split('|'),
                        errorCount = 0,
                        errors = '0';
                        console.log("Required field: "+constraintsList);

                  
                    if ($.inArray('required', constraintsList) != 1) {
                        if (!value != '') {
                            errorCount = errorCount+1;	
                            errors += 'This field is required!';
                            $this.globalErrorCounter = $this.globalErrorCounter + 1;							
                        }

                    }
                  
                // Count number of errors
				if (errorCount > 0) {  
					
					$this.css(userLogin.config.uiSettings.inputError);
					$(this).addClass('error-'+$(this).attr('class').split(' ')[0]);
                    
					
				} else { 	
					$this.css(userLogin.config.uiSettings.inputsuscess);
					$(this).removeClass('error-'+$(this).attr('class').split(' ')[0]);
				}

				
				console.log(errorCount + ' validation errors  occurred!!' );
			}
                
		
			 
				
			}
		});
	},
     
     // here you can pass class id and validate your Email field
    this.validateInputsOnNextEmail = function (container) {
       
                
            $(container).each( function () {
                
			if ($(container).data('constrain')) {
               
                if ($(this).data('constrain')) {
                    
                    var $this = $(this),
                        value = $this.val(),
                        validationConstraints = $this.data('constrain'),
                        constraintsList = validationConstraints.split('|'),
                        errorCount = 0,
                        errors = '0';
                        console.log("Email validation Field: "+constraintsList);

                  
                    if ($.inArray('email', constraintsList) != 1) {
                        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                        if (!value.match(emailReg)) {
                            errorCount = errorCount+1;	
                            errors += 'Not a valid email format!';
                            $this.globalErrorCounter = $this.globalErrorCounter + 1;
                        }
                    }
                      if ($.inArray('required', constraintsList) != 1) {
                
                        if (!value != '') {
                            errorCount = errorCount+1;	
                            errors += 'This field is required!';
                            $this.globalErrorCounter = $this.globalErrorCounter + 1;							
                        }

                    }
               // Count number of errors
				if (errorCount > 0) { 
					
					$this.css(userLogin.config.uiSettings.inputError);
					$(this).addClass('error-'+$(this).attr('class').split(' ')[0]);
					
				} else {	
					$this.css(userLogin.config.uiSettings.inputsuscess);
					$(this).removeClass('error-'+$(this).attr('class').split(' ')[0]);
				}
				console.log(errorCount + ' validation errors  occurred!!' );
			}
            
			}
		});
	},            
   // User Sign Up 
   this.signUp = function (){
            
                console.log('signUp Invoked!');
                
                userLogin.validateInputsOnNextRequired('.user-input-sign-up-password');
        	 
                userLogin.validateInputsOnNextRequired('.user-input-sign-up-re-password');	
                userLogin.validateInputsOnNextEmail('.user-input-sign-up-email');
                
                
				if ( $('.user-input-sign-up-email').hasClass('error-signup-email-validation' ) ||  $('.user-input-sign-up-password').hasClass('error-signup-password-validation') ||  $('.user-input-sign-up-re-password').hasClass('error-signup-re-password-validation'))
				{
                     console.log('Invalid User Field!');
                }else{
                     console.log('Validated User Field!');
                }  
              //  Loading & disable button when call back end  
              //  $('.spinner').show();
            }
        }
    }

    
     userLogin.init({
        userSetting: 'UserSettings'
     });
     
})(jQuery, window, document);

