import axios from "axios";

// axios.defaults.baseURL = "";

export const fetchContacts = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://https://6630e546c92f351c03db7b4a.mockapi.io/contacts"
    );
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
