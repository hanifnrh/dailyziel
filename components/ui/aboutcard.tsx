"use client";

import Image from "next/image";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "./3d-card";

export function AboutCard() {
    return (
        <CardContainer className="body">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src="/about.jpg"
                        height="1000"
                        width="1000"
                        className="h-52 sm:h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-20">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href="https://drive.google.com/drive/u/2/folders/19xwOE2Vdpmu_RYAfC6ViOwYgmPzqkVOo"
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-md font-normal dark:text-white"
                    >
                        Resume →
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href="https://www.linkedin.com/in/nurrahmat-hanif-635055218/"
                        target="__blank"
                        className="px-4 py-2 rounded-xl bg-blue-800 dark:bg-white dark:text-black text-white text-md"
                    >
                        LinkedIn
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
