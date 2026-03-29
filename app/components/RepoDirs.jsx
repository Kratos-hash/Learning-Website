import Link from "next/link";

async function fetchRepoContants(name) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

    const res = await fetch(
        `https://api.github.com/repos/kratos-hash/${name}/contents`, {
           
          next: {
                revalidate: 60,
            },
        }
    );
    const contents = await res.json();
    return contents;
}
const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContants(name);
  const dirs = contents.filter((content) => content.type === 'dir');
  return (
    <>
    <h3>Directories</h3>
    <ul>
      {dirs.map(dir => (
        <li key={dir.path}>
          <Link href={`/code/repos/${name}/dirs/${dir.path}`}>
          {dir.path}
          </Link>
          </li>
      ))}
      <li>

      </li>
    </ul>
    </>
  )
}

export default RepoDirs