import React,{ useState, useEffect } from 'react'

function Form(props) {
    const initialValues = { username: "", author: "", description: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
        // setFormValues(initialValues);
        
    };

    useEffect(() => {
        // console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
        }
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        if (!values.username) {
        errors.username = "Username is required!";
        }
        if (!values.author) {
        errors.author = "Author is required!";
        } 
        if (!values.description) {
        errors.description = "Description is required!";
        } 
        return errors;
    };
  return (
    <div class="form-body">
     {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div>Added successfully</div>
      ) : false}
  
  
      <form id="event-form" onSubmit={handleSubmit}>
          <div class="fieldset-wrapper">
              <fieldset>
                  <legend>Add New Book</legend>
              </fieldset>
              <div class="input-wrapper">
  
                  <div class="input-wrapper">
                      <label for="first-name">Name</label>
                      <input type="text" id="first-name" name='username' value={formValues.username} onChange={handleChange} />
                  <p>{formErrors.username}</p>

                  </div>
                  <div class="input-wrapper">
                      <label for="last-name">Author</label>
                      <input type="text" id="last-name" name='author' value={formValues.author} onChange={handleChange} />
                  <p>{formErrors.author}</p>

                  </div>
              </div>
              
              <div class="input-wrapper">
  
                  <label for="event-email">Description</label>
                  <textarea name="description" id="" cols="30" rows="10" value={formValues.description} onChange={handleChange}></textarea>

  
              </div>
              <p>{formErrors.description}</p>

          </div>
  
         
  
          <div class="fieldset-button">
              <button class="button" type="submit">Add</button>
              <button class="button" style={{background:'grey'}}  type="submit" onClick={props.closePopupHandler}>Close</button>

          </div>
          
      </form>
     
  
  
</div>  

  )
}

export default Form