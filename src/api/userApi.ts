export const fetchAdminData = async () => {
  try {
    const response = await fetch(
      "https://f2ed36a4mh.execute-api.ap-south-1.amazonaws.com/"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch admin data");
  }
};
