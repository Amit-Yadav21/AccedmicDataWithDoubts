const validate = (formData) => {
  const newErrors = {};
  const { First_name, Last_name, Gender, Dob, Mobile, Email, Address, terms } = formData;

  if (!First_name) {
    newErrors.First_name = 'Please enter your first name';
  } else if (First_name.length < 3) {
    newErrors.First_name = 'First name must be at least 3 characters';
  } else if (First_name.length > 25) {
    newErrors.First_name = 'First name must be less than 25 characters';
  }

  if (!Last_name) {
    newErrors.Last_name = 'Please enter your last name';
  } else if (Last_name.length < 3) {
    newErrors.Last_name = 'Last name must be at least 3 characters';
  } else if (Last_name.length > 25) {
    newErrors.Last_name = 'Last name must be less than 25 characters';
  }

  if (!Gender) {
    newErrors.Gender = 'Gender is required';
  } else if (!/^(male|female|other)$/i.test(Gender)) {
    newErrors.Gender = 'Invalid gender format';
  }


  if (!Mobile) {
    newErrors.Mobile = 'Enter your mobile number.';
  } else if (!/^[0-9]{10}$/.test(Mobile)) {
    newErrors.Mobile = 'Invalid mobile number';
  }

  if (!Email) {
    newErrors.Email = 'Please enter a valid email';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(Email)) {
    newErrors.Email = 'Invalid email format';
  }

  if (!terms) {
    newErrors.terms = 'You must accept the terms and conditions';
  }

  return newErrors;
};

export default validate;