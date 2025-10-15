import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import type { Home, CreateHomeData } from "../types/Home";
import { homeService } from "../services/api";

interface HomeFormProps {
  isEdit?: boolean;
}

const HomeForm = ({ isEdit = false }: HomeFormProps) => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(false);
  const [, setHome] = useState<Home | null>(null);

  const [formData, setFormData] = useState<CreateHomeData>({
    title: "",
    description: "",
    pricePerNight: 0,
    location: "",
    imageUrl: "",
    guests: 1,
    bedrooms: 1,
    bathrooms: 1,
    amenities: [],
  });

  useEffect(() => {
    if (isEdit && id) {
      const fetchHome = async () => {
        try {
          const homeData = await homeService.getHomeById(parseInt(id));
          setHome(homeData);
          setFormData({
            title: homeData.title,
            description: homeData.description,
            pricePerNight: homeData.pricePerNight,
            location: homeData.location,
            imageUrl: homeData.imageUrl,
            guests: homeData.guests,
            bedrooms: homeData.bedrooms,
            bathrooms: homeData.bathrooms,
            amenities: homeData.amenities,
          });
        } catch (error) {
          console.error("Error fetching home:", error);
        }
      };
      fetchHome();
    }
  }, [isEdit, id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "pricePerNight" ||
        name === "guests" ||
        name === "bedrooms" ||
        name === "bathrooms"
          ? parseInt(value) || 0
          : value,
    }));
  };

  const handleAmenitiesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const amenities = e.target.value
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item);
    setFormData((prev) => ({
      ...prev,
      amenities,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isEdit && id) {
        await homeService.updateHome(parseInt(id), formData);
      } else {
        await homeService.createHome(formData);
      }
      navigate("/");
    } catch (error) {
      console.error("Error saving home:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/");
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="mb-6">
        <Link
          to="/"
          className="text-blue-600 hover:text-blue-800 flex items-center"
        >
          <svg
            className="w-4 h-4 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to listings
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          {isEdit ? "Edit Home" : "Add New Home"}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Title *
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Description *
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="pricePerNight"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Price per night ($) *
            </label>
            <input
              type="number"
              id="pricePerNight"
              name="pricePerNight"
              value={formData.pricePerNight}
              onChange={handleInputChange}
              required
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Location *
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Image URL
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="guests"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Guests *
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                required
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="bedrooms"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Bedrooms *
              </label>
              <input
                type="number"
                id="bedrooms"
                name="bedrooms"
                value={formData.bedrooms}
                onChange={handleInputChange}
                required
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="bathrooms"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Bathrooms *
              </label>
              <input
                type="number"
                id="bathrooms"
                name="bathrooms"
                value={formData.bathrooms}
                onChange={handleInputChange}
                required
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="amenities"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Amenities (comma-separated)
            </label>
            <input
              type="text"
              id="amenities"
              name="amenities"
              value={formData.amenities.join(", ")}
              onChange={handleAmenitiesChange}
              placeholder="WiFi, Kitchen, Air Conditioning, Pool"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex space-x-4">
            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 disabled:opacity-50"
            >
              {loading ? "Saving..." : isEdit ? "Update Home" : "Create Home"}
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="flex-1 bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomeForm;
