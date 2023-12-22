import prisma from "@/libs/prisma";

export default async function CommentBox({ anime_mal_id }) {
  const comments = await prisma.comment.findMany({
    where: { anime_mal_id },
  });

  return (
    <>
      {comments.length != 0 ? (
        <div className="grid grid-cols-4 gap-4 mb-4">
          {comments.map((comment, index) => {
            return (
              <div
                key={index}
                className="rounded bg-color-primary text-color-dark p-4"
              >
                <p className="font-bold">{comment.username}</p>
                <p>{comment.comment}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-color-primary mb-4">
          <p className="italic ">komentar kosong lurr! Isilah biar ada</p>
        </div>
      )}
    </>
  );
}
