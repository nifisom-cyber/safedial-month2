
import { saveEnquiry } from '../utils/storage'

function Enquiries() {
    
  
function handleSubmit(event) {
  event.preventDefault()

  const formData = new FormData(event.currentTarget)
  const topic = formData.get('topic')
  const message = formData.get('message')?.trim()

  if (!topic || !message) {
    alert('Please select a topic and enter a question.')
    return
  }

  const enquiry = {
    topic,
    message,
    date: new Date().toISOString()
  }

  saveEnquiry(enquiry)

  alert('Demo enquiry saved successfully!')
  event.currentTarget.reset()
}



  return (
    <div className="enquiries-page">
      <h1>SafeDial Safety Enquiries</h1>

      <p>
        Have a question about safety awareness?
        Explore our demonstration enquiry form.
      </p>

      <h2>Submit a Safety Enquiry</h2>
      
<form onSubmit={handleSubmit}>
  <label htmlFor="enquiry-topic">
    Select Your Safety Topic:
  </label>

  <select id="enquiry-topic" name="topic">
    <option value="">Choose a topic</option>
    <option value="Emergency Numbers">
      Emergency Numbers
    </option>
    <option value="Personal Safety">
      Personal Safety
    </option>
    <option value="Road Safety">
      Road Safety
    </option>
    <option value="Community Safety">
      Community Safety
    </option>
  </select>
  
<label htmlFor="enquiry-message">
  Your Safety Question:
</label>

<textarea
  id="enquiry-message"
  name="message"
  rows="4"
  placeholder="Example: Where can I find emergency numbers?"
></textarea>

<button type="submit">
  Submit Enquiry
</button>

</form>


      <p>
        This feature is for demonstration purposes only.
        Please do not enter personal information
        or report real emergencies here.
      </p>
    </div>
  )
}

export default Enquiries
