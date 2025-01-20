import ButtonLink from "../components/button-link";
import Card1 from "../components/card-1";
import CommonInformation from "./common-information";

const Suit = () => {
  return (
    <section className="mt-[120px]">
      <CommonInformation
        label="Tiptap Suite"
        emphasizeSubLabel="Create your editor"
        normalSubLabel="with the features you want"
        description="Tiptap's extension-based architecture puts you in control. Choose from a
        wide range of over 100+ Core, Pro, and Cloud extensions, or build and
        integrate your own."
      />

      <div className="p-6 mx-auto md:w-11/12 lg:w-5/6 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <Card1
          icon="https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/65baa412e8e00dbb65c3e145_editor-signet.svg"
          label="Editor"
          badges={["Open source"]}
          description="Build custom editors that align perfectly with your user's needs, offering flexibility and ease of use. Ideal for creating user-centric interfaces with minimal fuss."
        />
        <Card1
          icon="https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/65baa3dc3f58a040b8249857_content-ai-signet.svg"
          label="Content AI"
          badges={["Cloud", "Paid feature"]}
          description="Help your users perfecting their tone and crossing language barriers, Tiptap's Content AI transforms words into wonders. Write, refine, and captivate with ease."
        />
        <Card1
          icon="https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/65baa3dc67b063a50545c95d_collaboration-signet.svg"
          label="Collaboration"
          badges={["Cloud", "Try for free"]}
          description="Allow your users to collaborate in any document and media. Integrate live carets and cursors to show who is typing, support offline editing and sync content."
        />
        <Card1
          icon="https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/65baa3dc5d0a67adb5b7b76f_comments-signet.svg"
          label="Comments"
          badges={["Cloud", "Paid feature"]}
          description="Integrate inline and document comments directly in your editor with Tiptap Comments. Ideal for collaboration, enabling real-time discussion and suggestions within the content."
        />
        <Card1
          icon="https://cdn.prod.website-files.com/645a9acecda2e0594fac6126/65baa3dc276ae556f0a6f4a9_documents-signet.svg"
          label="Documents"
          badges={["Cloud", "Try for free"]}
          description="Self-host your documents for full control, or opt for our secure, scalable cloud. Create and manipulate your documents any way you want, whether you're flying solo or on Cloud 9."
        />
      </div>
      <div className="text-center mt-24">
        <ButtonLink variant="outlined">Explore all extensions</ButtonLink>
      </div>
    </section>
  );
};

export default Suit;
