import React, { useState, useEffect, useContext } from "react";
import { AccountContext } from "../context/AccountContext";

function UserMedication() {
    const { user } = useContext(AccountContext);
    const [medicationData, setMedicationData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:4000/medications?user_id=${1}`);
            const data = await response.json();
            setMedicationData(data);
            setLoading(false);
        }
        fetchData();
    }, [user.id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            {medicationData.map((med) => (
                <div key={med.id}>
                    <h1>
                        {med.name}
                    </h1>
                    <h1>
                        {med.dosage_units}
                    </h1>
                    <h1>
                        {med.dosage}
                    </h1>
                    <h1>
                        {med.notes}
                    </h1>
                </div>
            ))}
        </div>
  );
}

export default UserMedication;