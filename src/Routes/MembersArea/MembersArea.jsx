import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFirebaseAuth } from "../../FirebaseAuth";
import { PageContent, Section } from "../../Components/Layout";
import { generatePageTitle } from "../../Utilities";
import Receipt from "../../assets/Receipt.png";

function MembersArea() {

    const [isAuthenticated] = useFirebaseAuth();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = generatePageTitle("Member's Area");
    });

    useEffect(() => {
        if (isAuthenticated == false) navigate("/auth/no-access");
    }, [isAuthenticated]);

    return (
        <PageContent>
            <Section title="Member's Area" subtitle="Exclusive deals and vouchers for Jack's Members">
                <div className="mx-auto">
                    <img src={Receipt} className="max-w-xs rounded-xl shadow-xl" />
                </div>
            </Section>
        </PageContent>
    )
}

export default MembersArea