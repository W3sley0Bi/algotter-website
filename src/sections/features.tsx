import Marquee from 'react-fast-marquee';
import { multiOtterSpriteImages } from '@/lib/utils';

export default function Features() {
  const feature = [
    {
      title: 'Notification',
      text: 'Receive notifications from a Notion board to your Discord channel, keeping you updated on changes. Notification Plus is coming soon.',
    },
    {
      title: 'Search',
      text: 'Look for issues and tickets directly from Discord.',
    },
    {
      title: 'Comment',
      text: 'Write a quick comment on a ticket when you receive a notification.',
    },
    {
      title: 'Create (Beta only)',
      text: 'Create new issues and tickets directly from a Discord channel.',
    },
    {
      title: 'Update (Beta only)',
      text: 'Update existing issues directly from Discord.',
    },
    {
      title: 'Otter AI (Alpha)',
      text: 'Chat with Otter AI and start chatting with you Notion Workspace and Discord Server',
    },
  ];

  const features = feature;

  const imageUrls = multiOtterSpriteImages;

  const getRandomImages = (count: number) => {
    const shuffled = imageUrls.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const randomImageUrls = getRandomImages(10);

  const texts = [
    'Notion Integration',
    'Discord Sync',
    'Real-time Updates',
    'Issue Tracking',
    'Collaboration Tools',
    'AI Assistance',
    'Algotter',
    'Notionrd'
  ];

  let textIndex = 0;

  return (
    <div>
      <section className="border-t-border dark:border-t-darkBorder dark:bg-darkBg border-t-2 bg-bg py-20 font-base lg:py-[100px]">
        <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Notiord Basic Functionalities
        </h2>

        <div className="mx-auto grid w-container max-w-full grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((singleFeature, i) => {
            return (
              <div
                className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark flex flex-col gap-3 rounded-base border-2 bg-white p-5"
                key={i}
              >
                <h4 className="text-xl font-heading">{singleFeature.title}</h4>
                <p>{singleFeature.text}</p>
              </div>
            );
          })}
        </div>
      </section>
      <div>
        <Marquee
          className="border-y-border dark:border-y-darkBorder dark:border-darkBorder dark:bg-secondaryBlack border-y-2 bg-white py-3 font-base sm:py-5"
          direction="left"
        >
          {randomImageUrls.map((imageUrl, id) => {
            let content;
            if ((id + 1) % 3 === 0) {
              content = (
                <span className="mx-8 text-xl font-heading sm:text-2xl lg:text-3xl">
                  {texts[textIndex % texts.length]}
                </span>
              );
              textIndex++;
            } else {
              content = (
                <img
                  src={imageUrl}
                  alt={`Random Image ${id}`}
                  className="mx-8"
                  style={{ width: '70px', height: '50px' }}
                />
              );
            }
            return <div className="flex items-center" key={id}>{content}</div>;
          })}
        </Marquee>
      </div>
    </div>
  );
}