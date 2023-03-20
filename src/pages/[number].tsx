import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import { YleApiClient } from "@/repositories/Yle"
import { TeletextResponse } from "@/types/Yle.types"
import { TeleText } from "@/components/TeleText"

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    fallback: "blocking",
    paths: []
  }
}

export const getStaticProps: GetStaticProps<TeletextResponse> = async (ctx) => {
  if (typeof ctx.params?.number !== "string") {
    return {
      notFound: true,
    }
  }

  if (!process.env.APP_ID || !process.env.APP_KEY) {
    return {
      notFound: true,
    }
  }

  const client = YleApiClient(process.env.APP_ID, process.env.APP_KEY)

  try {
    const props = await client.getV1TeletextPage(ctx.params.number)
    return {
      props,
      revalidate: 500,
    }
  } catch {
    return {
      notFound: true,
    }
  }
}

export default function Home(props: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <TeleText teleText={props.teletext} />
  )
}
