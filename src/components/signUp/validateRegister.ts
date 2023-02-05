export const validate = (
  data: {
    email: string;
    password: string | any[];
    name: string;
    confirmPassword: any;
    isAccepted: any;
  },
  type: string
) => {
  let errors: {
    name?: string;
    password?: string;
    email?: string;
    confirmPassword?: string;
    isAccepted?: string;
  } = {
    name: "",
    password: "",
    email: "",
    confirmPassword: "",
    isAccepted: "",
  };

  if (!data.email) {
    errors.email = "Email required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email address is invalid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password needs to be 6 character or more";
  } else {
    delete errors.password;
  }

  if (type === "signup") {
    if (!data.name.trim()) {
      errors.name = "Username required";
    } else {
      delete errors.name;
    }

    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm password";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "Password do not match";
    } else {
      delete errors.confirmPassword;
    }

    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "Accept our regulations";
    }
  }

  return errors;
};
