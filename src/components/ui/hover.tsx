import Script from "next/script";

interface HoverEffectProps {
    text: string;
}

const HoverEffect: React.FC<HoverEffectProps> = ({ text }) => {
    return (
        <>
            <h5 data-value={text} className="cursor-pointer">{text}</h5>
            <Script id="hover-script" strategy="lazyOnload">
                {`
                    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

                    let interval = null;

                    document.querySelectorAll("h5").forEach(h5 => {
                        h5.onmouseover = event => {
                            let iteration = 0;

                            clearInterval(interval);

                            interval = setInterval(() => {
                                event.target.innerText = event.target.innerText
                                    .split("")
                                    .map((letter, index) => {
                                        if (index < iteration) {
                                            return event.target.dataset.value[index];
                                        }

                                        return letters[Math.floor(Math.random() * 26)];
                                    })
                                    .join("");

                                if (iteration >= event.target.dataset.value.length) {
                                    clearInterval(interval);
                                }

                                iteration += 1 / 3;
                            }, 30);
                        }
                    });
                `}
            </Script>
        </>
    );
};

export default HoverEffect;
