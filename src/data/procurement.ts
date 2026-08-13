export type ProcurementStep = {
  number: string;
  title: string;
  description: string;
};

export const procurementSteps: ProcurementStep[] = [
  {
    number: "01",
    title: "Tell Us What You Need",
    description:
      "Share an equipment description, manufacturer, model, part number, datasheet, size, quantity, specifications, or operating requirements.",
  },
  {
    number: "02",
    title: "We Source the Solution",
    description: "Global Crude USA Inc. evaluates appropriate sourcing options and equipment availability for your request.",
  },
  {
    number: "03",
    title: "Quote & Coordination",
    description: "We provide commercial details and applicable logistics information for your review.",
  },
  {
    number: "04",
    title: "Delivery Support",
    description: "We coordinate equipment and material delivery according to your project requirements.",
  },
];
