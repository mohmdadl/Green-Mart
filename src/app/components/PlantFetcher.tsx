// app/components/PlantFetcher.tsx
'use client';

import { useState } from 'react';
import axios from 'axios';

// Define a type for a single plant for better type safety
interface Plant {
  id: number;
  common_name: string;
  scientific_name: string[];
  default_image?: {
    medium_url?: string;
    regular_url?: string;
    thumbnail?: string;
  };
  price?: string; // Some API responses may include price
}

// Type for detailed plant info
interface PlantDetails {
  id: number;
  common_name: string;
  scientific_name: string[];
  watering?: string;
  sunlight?: string[];
  care_level?: string;
  description?: string;
}

export default function PlantFetcher() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [selectedPlant, setSelectedPlant] = useState<PlantDetails | null>(null);
  const [detailsLoading, setDetailsLoading] = useState(false);

  const fetchPlants = async () => {
    setIsLoading(true);
    setError(null);
    setPlants([]);

    try {
      const apiKey = process.env.NEXT_PUBLIC_PERENUAL_API_KEY;
      if (!apiKey) throw new Error("API key is not configured.");

      const result = await axios.get(
        `https://perenual.com/api/species-list?key=${apiKey}`
      );

      setPlants(result.data.data);
    } catch (err: any) {
      console.error("Error occurred:", err);
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const fetchPlantDetails = async (id: number) => {
    setDetailsLoading(true);
    setSelectedPlant(null);

    try {
      const apiKey = process.env.NEXT_PUBLIC_PERENUAL_API_KEY;
      if (!apiKey) throw new Error("API key is not configured.");

      const result = await axios.get(
        `https://perenual.com/api/species/details/${id}?key=${apiKey}`
      );

      setSelectedPlant(result.data);
    } catch (err: any) {
      console.error("Details fetch error:", err);
      setError(err.message || "Failed to fetch details.");
    } finally {
      setDetailsLoading(false);
    }
  };

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        marginTop: "2rem",
      }}
    >
      <h2>Fetch Plant Data</h2>
      <p>This is a client-side component that fetches data when you click the button.</p>

      <button onClick={fetchPlants} disabled={isLoading}>
        {isLoading ? "Loading..." : "Fetch Plants"}
      </button>

      {error && (
        <div style={{ color: "red", marginTop: "1rem" }}>Error: {error}</div>
      )}

      {plants.length > 0 && (
        <div style={{ marginTop: "1rem" }}>
          <h3>Response:</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {plants.slice(0, 10).map((plant) => (
              <li
                key={plant.id}
                style={{
                  marginBottom: "1rem",
                  padding: "0.5rem",
                  border: "1px solid #ddd",
                  borderRadius: "6px",
                }}
              >
                {/* Show plant image */}
                {plant.default_image?.medium_url && (
                  <img
                    src={plant.default_image.medium_url}
                    alt={plant.common_name}
                    style={{
                      width: "120px",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "6px",
                      marginBottom: "0.5rem",
                    }}
                  />
                )}

                <div>
                  <strong>{plant.common_name}</strong>{" "}
                  ({plant.scientific_name.join(", ")})
                </div>

                {/* Show price if exists */}
                {plant.price && <p>💲 Price: {plant.price}</p>}

                <button
                  onClick={() => fetchPlantDetails(plant.id)}
                  style={{
                    marginTop: "0.5rem",
                    padding: "0.3rem 0.6rem",
                    borderRadius: "4px",
                    border: "none",
                    background: "#4CAF50",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  {detailsLoading ? "Loading..." : "More Info"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Show plant details if selected */}
      {selectedPlant && (
        <div
          style={{
            marginTop: "2rem",
            padding: "1rem",
            border: "1px solid #aaa",
            borderRadius: "8px",
            background: "#f9f9f9",
          }}
        >
          <h3>Plant Details</h3>
          <p>
            <strong>{selectedPlant.common_name}</strong> (
            {selectedPlant.scientific_name.join(", ")})
          </p>
          {selectedPlant.description && <p>{selectedPlant.description}</p>}
          {selectedPlant.watering && <p>💧 Watering: {selectedPlant.watering}</p>}
          {selectedPlant.sunlight && (
            <p>☀️ Sunlight: {selectedPlant.sunlight.join(", ")}</p>
          )}
          {selectedPlant.care_level && <p>🌱 Care Level: {selectedPlant.care_level}</p>}
        </div>
      )}
    </div>
  );
}
