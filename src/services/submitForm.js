import { BASE_URL } from "../utils/consts";

export async function submitForm(formData) {
  const res = await fetch( `${BASE_URL}/server/sendEmailOnSubmit.php`, {
    method: "POST",
    body: JSON.stringify(formData),
    headers:{
        'content-type':'application/json'
    }
  });
  const data = await res.json().catch(error => {
    console.error("Error parsing JSON:", error);
    return res.text(); // Log the raw response
  });
return data;
}
