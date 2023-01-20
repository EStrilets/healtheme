import { Container, Input, VStack } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "../context/AccountContext";

function NewMedication() {
  const { user } = useContext(AccountContext);
  const [isLoading, setIsLoading] = useState(true);
  
  const [formData, setFormData] = useState({
    name: "",
    dosage_units: "",
    dosage: "",
    notes: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:4000/medications", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({...formData, user_id: user.id}),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container maxW="full" mt={0} centerContent overflow="hidden">
        <form onSubmit={handleSubmit}>
          <VStack
            w={{ base: "90%", md: "500px" }}
            m="auto"
            justify="center"
            h="100vh"
            spacing="1rem"
          >
            <label>
              Name:
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Dosage Units:
              <Input
                type="text"
                name="dosage_units"
                value={formData.dosage_units}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Dosage:
              <Input
                type="number"
                name="dosage"
                value={formData.dosage}
                onChange={handleChange}
              />
            </label>
            <br />
            <label>
              Notes:
              <Input
                name="notes"
                value={formData.notes}
                onChange={handleChange}
              />
            </label>
            <br />
            <button type="submit">Create Medication</button>
          </VStack>
        </form>
    </Container>
  );
}

export default NewMedication;