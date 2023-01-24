import React, { useState, useEffect, useContext } from "react";
import { AccountContext } from "../context/AccountContext";
import { Button, Card, CardBody, CardFooter, Container, Divider, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";

function UserMedication() {
    const { user } = useContext(AccountContext);
    const [medicationData, setMedicationData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:4000/medications?user_id=${user.user_id}`);
            const data = await response.json();
            setMedicationData(data);
            setLoading(false);
        }
        fetchData();
    }, [user.user_id, medicationData]);

    if (loading) {
        return <p>Loading...</p>
    }

    const deleteMedication = async (id) => {
        try {
            await fetch(`http://localhost:4000/medications/${id}?user_id=${user.user_id}`, {
                method: 'DELETE'
            });
        } catch (err) {
            console.error(err.message);
        }
    }

    return (
        <Container mb={5} centerContent>
            <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
                {medicationData.map((med) => (
                    <Card maxW='sm' key={med.id}>
                        <CardBody>
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>Name: {med.name}</Heading>
                                <Text>
                                    Dosage Units {med.dosage_units}
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    Dosage {med.dosage}
                                </Text>
                                <Text color='blue.600' fontSize='2xl'>
                                    Notes {med.notes}
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <Button onClick={() => deleteMedication(med.id)} variant='ghost' colorScheme='blue'>
                                Delete
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </SimpleGrid>
        </Container>
    );
}

export default UserMedication;