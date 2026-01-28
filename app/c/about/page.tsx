export default function AboutPage() {
    return (
        <div className="py-6 px-4">
            <div className="max-w-3xl mx-auto space-y-6">
                <h2 className="text-2xl font-bold">About This Community</h2>

                <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold mb-3">Our Mission</h3>
                    <p className="text-muted-foreground leading-relaxed">
                        Building a vibrant community where members can learn, grow, and connect with each other.
                        We believe in the power of collaboration and shared knowledge.
                    </p>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold mb-3">Community Guidelines</h3>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Be respectful and considerate to all members</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Share knowledge and help others grow</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>Keep discussions relevant and constructive</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary">•</span>
                            <span>No spam or self-promotion without permission</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-card p-6 rounded-lg border">
                    <h3 className="font-semibold mb-3">Stats</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="text-center">
                            <p className="text-2xl font-bold text-primary">1.2K</p>
                            <p className="text-sm text-muted-foreground">Members</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-primary">350</p>
                            <p className="text-sm text-muted-foreground">Posts</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-primary">48</p>
                            <p className="text-sm text-muted-foreground">Courses</p>
                        </div>
                        <div className="text-center">
                            <p className="text-2xl font-bold text-primary">92%</p>
                            <p className="text-sm text-muted-foreground">Active</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
