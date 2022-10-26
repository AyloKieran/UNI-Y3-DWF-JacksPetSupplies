import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../FirebaseAuth";
import { PageContent, Section } from "../../Components/Layout";
import { generatePageTitle } from "../../Utilities";


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
                <div className="text-red-500 font-black text-3xl">
                    VOUCHER HERE
                </div>
            </Section>
        </PageContent>
    )
}

export default Secure