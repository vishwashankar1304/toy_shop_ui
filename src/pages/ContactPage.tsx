
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4">Contact Us</h1>
          <p className="text-lg text-indigo-600 max-w-2xl mx-auto">
            Have questions about our toys? Need help with an order? We're here to help you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="border-indigo-100 hover:shadow-md transition-shadow bg-gradient-to-br from-indigo-50 to-white">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                  <Mail className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-indigo-800">Email Us</h3>
                <p className="text-indigo-600 mb-2">For general inquiries:</p>
                <a href="mailto:info@toytown.com" className="text-indigo-800 hover:underline">
                  info@toytown.com
                </a>
                <p className="text-indigo-600 mt-2 mb-2">For customer support:</p>
                <a href="mailto:support@toytown.com" className="text-indigo-800 hover:underline">
                  support@toytown.com
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-indigo-100 hover:shadow-md transition-shadow bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Phone className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-blue-800">Call Us</h3>
                <p className="text-blue-600 mb-2">Customer Support:</p>
                <a href="tel:+11234567890" className="text-blue-800 hover:underline">
                  +1 (123) 456-7890
                </a>
                <p className="text-blue-600 mt-2 mb-2">Wholesale Inquiries:</p>
                <a href="tel:+10987654321" className="text-blue-800 hover:underline">
                  +1 (098) 765-4321
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="border-indigo-100 hover:shadow-md transition-shadow bg-gradient-to-br from-purple-50 to-white">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                  <MapPin className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-purple-800">Visit Us</h3>
                <p className="text-purple-600 mb-2">Main Store & Headquarters:</p>
                <address className="text-purple-800 not-italic">
                  123 Toy Lane<br />
                  Playtime City, PC 12345<br />
                  United States
                </address>
                <div className="flex items-center mt-3 text-purple-600">
                  <Clock className="h-4 w-4 mr-1" />
                  <span className="text-sm">Mon-Fri: 9am-6pm, Sat: 10am-4pm</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="border-indigo-100">
          <CardHeader className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-t-lg">
            <CardTitle className="text-indigo-800">Send Us a Message</CardTitle>
            <CardDescription className="text-indigo-600">
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-indigo-700 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="border-indigo-200 focus:border-indigo-400"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-indigo-700 mb-1">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="border-indigo-200 focus:border-indigo-400"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-indigo-700 mb-1">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="border-indigo-200 focus:border-indigo-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-indigo-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="border-indigo-200 focus:border-indigo-400"
                />
              </div>
              <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 flex items-center gap-2">
                <Send className="h-4 w-4" /> Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactPage;
