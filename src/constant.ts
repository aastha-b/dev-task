interface IFormDetails {
  loginHeading1: string;
  loginHeading2: string;
  formFields: IFormFields;
  btnCTA: string;
  subheading: string;
}
export interface IFormFields {
  email: IFormFieldDetails;
  password: IFormFieldDetails;
  username?: IFormFieldDetails;
}
export interface IFormFieldDetails {
  label: string;
  placeholder: string;
}

export const loginFormDetails: IFormDetails = {
  loginHeading1: "WELCOME BACK",
  loginHeading2: "Log into your account",
  formFields: {
    email: {
      label: "Email or Username",
      placeholder: "Enter your email or username",
    },
    password: {
      label: "Password",
      placeholder: "Enter your password",
    },
  },
  btnCTA: "Login Now",
  subheading: "Not registered yet?",
};

export const signUpFormDetails: IFormDetails = {
  loginHeading1: "SIGN UP",
  loginHeading2: "Create an account to continue",
  formFields: {
    email: {
      label: "Email",
      placeholder: "Enter your email",
    },
    username: {
      label: "Username",
      placeholder: "Choose a preferred username",
    },
    password: {
      label: "Password",
      placeholder: "Choose a strong password",
    },
  },
  btnCTA: "Continue",
  subheading: "Already have an account?",
};

export const Posts = [
  {
    userName: "Theresa Webb",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    time: "5mins ago",
    comments: 24,
    isEdited: false,
    icon: "👋",
    profilePic: "profile1.png",
  },
  {
    userName: "Marvin McKinney",
    text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    time: "8mins ago",
    comments: 12,
    isEdited: true,
    icon: "😞",
    profilePic: "profile2.png",
  },
];
