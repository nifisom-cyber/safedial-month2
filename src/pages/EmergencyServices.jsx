import { useState } from 'react'
import EmergencyServiceCard from '../components/EmergencyServiceCard.jsx'

function EmergencyServices() {
    const [searchTerm, setSearchTerm] = useState('')
    
const emergencyServices = [
  { name: 'Police', number: '10111', icon: '🚓' },
  { name: 'Ambulance', number: '10177', icon: '🚑' },
  { name: 'Emergency from a cellphone', number: '112', icon: '📱' },
]

const filteredServices = emergencyServices.filter((service) =>
  service.name.toLowerCase().includes(searchTerm.toLowerCase())
)

  return (
    <div>
      <h1 className="emergency-page-title">Emergency Services 🚨</h1>
      
<input
  type="text"
  className="search-input"
  placeholder="Search emergency services..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>

{searchTerm && (
  <button
    type="button"
    className="copy-button"
    onClick={() => setSearchTerm('')}
  >
    Clear Search
  </button>
)}

      <p>
        Find important emergency contact
        information quickly and easily.
      </p>

      <h2>Help Is One Dial Away!</h2>

      
{filteredServices.length === 0 && (
  <p className="no-results">
    No emergency services found. Please try another search.
  </p>
)}

<div className="emergency-list">
  {filteredServices.map((service) => (
    <EmergencyServiceCard
      key={service.name}
      service={service}
    />
  ))}
</div>

    </div>
  )
}

export default EmergencyServices
