
// This is a mock service that simulates image caption generation
// In a real-world application, this would be connected to a machine learning API

export interface CaptionResult {
  text: string;
  confidence: number;
}

export async function generateCaption(imageFile: File): Promise<CaptionResult> {
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 2000 + Math.random() * 1000));
  
  // List of image types and their corresponding caption templates
  const captionTemplates = [
    {
      type: "landscape",
      captions: [
        "A breathtaking landscape with mountains and a clear blue sky.",
        "A serene natural vista with rolling hills and vibrant greenery.",
        "A picturesque outdoor scene showcasing the beauty of nature.",
        "A stunning panoramic view of mountains in the distance."
      ]
    },
    {
      type: "portrait",
      captions: [
        "A person with a thoughtful expression against a neutral background.",
        "A detailed portrait capturing genuine emotion and character.",
        "A professional photograph focusing on facial features and expression.",
        "A candid portrait showcasing authentic personality and mood."
      ]
    },
    {
      type: "food",
      captions: [
        "A delicious meal beautifully plated with vibrant colors and garnishes.",
        "A mouth-watering dish presented with artistic attention to detail.",
        "A freshly prepared food item showcasing culinary expertise.",
        "An appetizing plate of food arranged with professional presentation."
      ]
    },
    {
      type: "urban",
      captions: [
        "A dynamic cityscape with modern architecture and urban elements.",
        "A bustling street scene capturing the energy of city life.",
        "A view of contemporary buildings creating a striking urban landscape.",
        "An architectural photograph highlighting the design of city structures."
      ]
    },
    {
      type: "pet",
      captions: [
        "An adorable pet with expressive eyes in a comfortable setting.",
        "A cute animal companion captured in a candid moment.",
        "A furry friend displaying characteristic behavior and personality.",
        "A charming pet photograph highlighting the bond between animals and humans."
      ]
    }
  ];

  // Randomly select an image type and caption
  const randomType = captionTemplates[Math.floor(Math.random() * captionTemplates.length)];
  const randomCaption = randomType.captions[Math.floor(Math.random() * randomType.captions.length)];

  // Generate random confidence score (85%-98%)
  const confidence = 0.85 + (Math.random() * 0.13);

  return {
    text: randomCaption,
    confidence: confidence
  };
}
