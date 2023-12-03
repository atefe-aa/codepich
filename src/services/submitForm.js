export async function submitForm(formData) {
  const res = await fetch("/src/php/sendEmailOnSubmit.php", {
    method: "POST",
    body: JSON.stringify(formData),
    headers:{
        'content-type':'application/json'
    }
  });
  const data = await res.json();
  console.log(data)

}
