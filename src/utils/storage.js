
export function saveEnquiry(enquiry) {
  const enquiries = JSON.parse(
    localStorage.getItem('safedial-enquiries') || '[]'
  )

  enquiries.push(enquiry)

  localStorage.setItem(
    'safedial-enquiries',
    JSON.stringify(enquiries)
  )
}

export function getEnquiries() {
  try {
    return JSON.parse(
      localStorage.getItem('safedial-enquiries') || '[]'
    )
  } catch {
    return []
  }
}
