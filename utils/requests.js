async function fetchProperties() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_MONGODB_URL}/properties`);
    
    console.log('Fetch URL:', `${process.env.NEXT_PUBLIC_API_MONGODB_URL}/properties`);
    console.log('Response status:', res.status);
    
    if (!res.ok) {
      throw new Error('Failed to fetch properties');
    }
    
    const data = await res.json();
    console.log('Fetched properties count:', data.length);
    
    return data;
  } catch (error) {
    console.error("Error fetching properties:", error);
    return [];
  }
}

export { fetchProperties };