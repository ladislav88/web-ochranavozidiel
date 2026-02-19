
import emailjs from '@emailjs/browser';

// Update EmailData interface to make the required fields explicit
export interface EmailData {
  name: string;
  email: string;
  phone: string;
  city?: string;
  message?: string;
  vehicleBrand?: string;
  vehicleModel?: string;
  vehicleYear?: string;
  vehicleMonth?: string;
  startMethod?: string;
  engineType?: string;
  customVehicleModel?: string;
  customEngineType?: string;
}

export const sendEmail = async (data: EmailData) => {
  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    phone: data.phone,
    city: data.city || '',
    message: data.message || '',
    vehicle_brand: data.vehicleBrand || '',
    vehicle_model: data.vehicleModel || '',
    vehicle_year: data.vehicleYear || '',
    vehicle_month: data.vehicleMonth || '',
    start_method: data.startMethod || '',
    engine_type: data.engineType || '',
    custom_vehicle_model: data.customVehicleModel || '',
    custom_engine_type: data.customEngineType || '',
  };

  try {
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!serviceId || !templateId || !publicKey) throw new Error('EmailJS config missing');
    const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
    return response;
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};
