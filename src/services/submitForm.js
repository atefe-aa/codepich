export async function submitForm(formData) {
  const res = await fetch(" https://bime.see5.net/server/sendEmailOnSubmit.php", {
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
  console.log(data)

}
