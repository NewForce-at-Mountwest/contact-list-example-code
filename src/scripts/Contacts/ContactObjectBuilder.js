const buildContactObject = (nameParam, emailParam, phoneParam) => {
  return {
    name: nameParam,
    email: emailParam,
    phone: phoneParam,
    userId: sessionStorage.getItem("userId")
  };
};

export default buildContactObject;
