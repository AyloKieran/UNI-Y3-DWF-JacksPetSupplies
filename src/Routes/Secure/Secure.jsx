import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../FirebaseAuth";
import { PageContent, Section } from "../../Components/Layout";
import { generatePageTitle } from "../../Utilities";
import Receipt from "../../assets/Receipt.png";

function Secure() {

    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = generatePageTitle("Member's Area");
    });

    useEffect(() => {
        if (loading) return;
        if (!user) navigate("/auth/no-access");
    }, [user, loading]);

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

export default Secure