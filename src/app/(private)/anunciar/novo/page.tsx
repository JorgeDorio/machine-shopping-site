"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChangeEvent, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export default function NewAnnounce() {
  const [images, setImages] = useState<string[]>([]);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const fileArray = Array.from(files);
    const newImages: string[] = []; // tipo explícito

    fileArray.forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          newImages.push(reader.result);
          if (newImages.length === fileArray.length) {
            setImages((prevImages) => [...prevImages, ...newImages]);
          }
        }
      };
      reader.readAsDataURL(file); // reader espera um Blob
    });
  };

  return (
    <div className="m-16 space-y-8">
      <h1 className="text-2xl font-semibold">Criar novo anúncio</h1>
      <div className="flex gap-16">
        <div className="w-full flex flex-col gap-4">
          <Label htmlFor="picture" className="flex flex-col items-start">
            Selecione as fotos do seu anúncio
            <Input
              multiple
              id="picture"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </Label>
          <Input type="text" placeholder="Título" />
          <Input type="text" placeholder="Preço" />
        </div>
        <Card>
          <CardContent>
            <h1 className="font-semibold mb-2">Prévia</h1>
            <Carousel>
              <CarouselContent className="aspect-square w-72">
                {images.map((src, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={src}
                      alt={`preview-${index}`}
                      className="rounded aspect-square object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
