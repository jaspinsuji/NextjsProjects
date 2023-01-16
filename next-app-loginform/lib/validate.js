export default function form_validation(values){
    const errors = {};
 
    if (!values.username) {
        errors.username = 'Required';
      }else if (values.username.includes("")) {
        errors.username = 'Invalid User Name';
      }
   if (!values.email) {
     errors.email = 'Required';
   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
     errors.email = 'Invalid email address';
   }
   if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length<3||values.password.length>20) {
    errors.password = 'Password must be greater than 3 and less than 20 characters';
  }else if (values.password.includes("")) {
    errors.password = 'Invalid Password';
  }
  //validate Confirm Password
  if (!values.cpassword) {
    errors.email = 'Required';
  } else if (values.password !== values.cpassword) {
    errors.cpassword = 'Password not matched !';
  }else if (values.cpassword.includes("")) {
    errors.cpassword = 'Invalid Confirm Password';
  }
  return errors;
}

// export default function register_validate(values){
//     const errors = {};
//     if (!values.username) {
//         errors.username = 'Required';
//       }else if (values.username.includes("")) {
//         errors.username = 'Invalid User Name';
//       }
//    if (!values.email) {
//      errors.email = 'Required';
//    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//      errors.email = 'Invalid email address';
//    }
//    if (!values.password) {
//     errors.password = 'Required';
//   } else if (values.password.length<3||values.password.length>20) {
//     errors.password = 'Password must be greater than 3 and less than 20 characters';
//   }else if (values.password.includes("")) {
//     errors.password = 'Invalid Password';
//   }
//   //validate Confirm Password
//   if (!values.cpassword) {
//     errors.email = 'Required';
//   } else if (values.password !== values.cpassword) {
//     errors.cpassword = 'Password not matched !';
//   }else if (values.cpassword.includes("")) {
//     errors.cpassword = 'Invalid Confirm Password';
//   }
//   return errors;
// }