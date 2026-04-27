import {
  SiPytorch,
  SiRedis,
  SiMongodb,
  SiTwilio,
  SiGooglecloud,
  SiLangchain,
  SiDrizzle,
  SiWeightsandbiases,
  SiNvidia,
  SiLivekit,
  SiOpenai,
  SiClaude,
  SiModelcontextprotocol,
  SiExpress,
  SiMui,
  SiShadcnui,
  SiTailwindcss,
  SiZod,
  SiOpenapiinitiative,
  SiOpentelemetry,
  SiSentry,
  SiIntercom,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

type IconProps = React.SVGProps<SVGSVGElement>;

const colored = (
  Icon: React.ComponentType<IconProps>,
  color: string,
) => {
  const Wrapped = (props: IconProps) => (
    <Icon {...props} style={{ color, ...(props.style ?? {}) }} />
  );
  Wrapped.displayName = `Colored(${(Icon as { displayName?: string; name?: string }).displayName ?? (Icon as { name?: string }).name ?? "Icon"})`;
  return Wrapped;
};

export const PytorchIcon = colored(SiPytorch, "#EE4C2C");
export const RedisIcon = colored(SiRedis, "#DC382D");
export const MongoIcon = colored(SiMongodb, "#47A248");
export const TwilioIcon = colored(SiTwilio, "#F22F46");
export const AwsIcon = colored(FaAws, "#FF9900");
export const GcpIcon = colored(SiGooglecloud, "#4285F4");
export const DrizzleIcon = colored(SiDrizzle, "#C5F74F");
export const LangchainIcon = SiLangchain;
export const WandbIcon = colored(SiWeightsandbiases, "#FFBE00");
export const NvidiaIcon = colored(SiNvidia, "#76B900");
export const LivekitIcon = colored(SiLivekit, "#06B6D4");
export const OpenaiIcon = colored(SiOpenai, "#10A37F");
export const ClaudeIcon = colored(SiClaude, "#D97757");
export const McpIcon = SiModelcontextprotocol;
export const ExpressIcon = SiExpress;
export const MuiIcon = colored(SiMui, "#007FFF");
export const ShadcnIcon = SiShadcnui;
export const TailwindIcon = colored(SiTailwindcss, "#06B6D4");
export const ZodIcon = colored(SiZod, "#3E67B1");
export const OpenapiIcon = colored(SiOpenapiinitiative, "#6BA539");
export const OpentelemetryIcon = colored(SiOpentelemetry, "#F5A800");
export const SentryIcon = colored(SiSentry, "#362D59");
export const IntercomIcon = colored(SiIntercom, "#1F8DED");

export const LangfuseIcon = ({ className }: ImgProps) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src="/langfuse.png" alt="Langfuse" className={className} />
);

// Static-asset-backed icons (no maintained icon set carries these)
type ImgProps = { className?: string };

export const DynamoIcon = ({ className }: ImgProps) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src="/dynamodb.svg" alt="DynamoDB" className={className} />
);

export const BullmqIcon = ({ className }: ImgProps) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src="/bullmq.png" alt="BullMQ" className={className} />
);

export const ZustandIcon = ({ className }: ImgProps) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src="/zustand.svg" alt="Zustand" className={className} />
);

export const PineconeIcon = ({ className }: ImgProps) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img src="/pinecone.png" alt="Pinecone" className={className} />
);
