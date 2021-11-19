import Articles from "../components/Articles";

const resourcessingle = () => {
    return (
        <>
            <div className="max-w-1120 mx-auto mt-20 lg:mt-28 px-6 lgg:px-0">
                <div className="lg:px-20 mb-20">
                    <p className="text-xs text-primary mb-8 mt-12 font-bold">SEP 8, 2021 <span className="px-2">•</span > Article</p>
                    <h1 className="text-3xl md:text-5xl text-secondary font-semibold mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh eget adipiscing scelerisque sit amet amet rhoncus. Nec.</h1>
                </div>
            </div>
            <div className="max-w-1440 mx-auto px-6 lgg:px-0 md:pt-36 relative mb-24 lg:mb-32">
                <div className="max-w-1088 w-full lg:absolute right-0 mt-24 md:-mt-32 lg:-mt-40">
                    <img className="w-full mb-64" src="/img/174.jpg" alt="" />
                </div>
                <div className="max-w-736 mx-auto -mt-36 lg:mt-48  lg:pt-96">
                    <div className="w-full">
                        <h2 className="hidden md:block text-3xl font-bold mb-4">Headline</h2>
                        <p className="text-2xl mb-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim elit eros sem et nisl morbi massa. Leo, lacinia amet molestie amet, faucibus facilisi nulla morbi risus. Scelerisque in lacus molestie viverra id ornare sed pellentesque. Aenean donec quis vitae sapien, volutpat. Tempor, accumsan quis urna suspendisse nunc, nulla. Et cursus tortor, egestas feugiat. Posuere mi massa lorem pulvinar. Duis leo, pellentesque amet id sed sit lacinia. Cras mauris nisl, egestas consequat quam ac. Ultrices a habitasse elementum, gravida in odio dictumst a habitant. Semper suspendisse quis urna ullamcorper mauris. Egestas amet a pharetra erat eget eget ac.
                        Amet viverra enim dui tellus pellentesque libero tincidunt. Morbi a eu erat vitae iaculis ac molestie.</p>
                        <img src="/img/527.png" alt="" />
                        <p className="text-2xl mt-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim elit eros sem et nisl morbi massa. Leo, lacinia amet molestie amet, faucibus facilisi nulla morbi risus. Scelerisque in lacus molestie viverra id ornare sed pellentesque. Aenean donec quis vitae sapien, volutpat. Tempor, accumsan quis urna suspendisse nunc, nulla. Et cursus tortor, egestas feugiat. Posuere mi massa lorem pulvinar. Duis leo, pellentesque amet id sed sit lacinia. Cras mauris nisl, egestas consequat quam ac. Ultrices a habitasse elementum, gravida in odio dictumst a habitant. Semper suspendisse quis urna ullamcorper mauris. Egestas amet a pharetra erat eget eget ac.
                        Amet viverra enim dui tellus pellentesque libero tincidunt. Morbi a eu erat vitae iaculis ac molestie.</p>
                    </div>
                </div>
            </div>
            <Articles bg="bg-white" />
        </>
    );
}

export default resourcessingle;