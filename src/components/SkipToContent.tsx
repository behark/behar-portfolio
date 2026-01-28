import Link from 'next/link';

export function SkipToContent() {
    return (
        <Link
            href="#main-content"
            className="skip-to-content"
        >
            Kalo te përmbajtja kryesore
        </Link>
    );
}
