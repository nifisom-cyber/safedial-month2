function EmergencyServiceCard({ service }) {
  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(String(service.number))
      alert('Number copied successfully!')
    } catch (error) {
      alert('Could not copy the number.')
    }
  }

  return (
    <div className="service-card">
      <span className="service-icon">
        {service.icon}
      </span>

      <h3>{service.name}</h3>

      <p className="number">{service.number}</p>

      <button
        type="button"
        className="copy-button"
        onClick={copyNumber}
      >
        📋 Copy Number
      </button>

      <a
        href={`tel:${String(service.number).replace(/\D/g, '')}`}
        className="call-button"
      >
        📞 Call {service.number}
      </a>
    </div>
  )
}

export default EmergencyServiceCard