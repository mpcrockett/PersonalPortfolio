import { BsXLg } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa6';

interface Props {
  title: string,
  description: string,
  repoUrl: string,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  tags: Array<string>
}

export default function Modal(props: Props) {
  const { title, description, repoUrl, setShowModal, tags } = props;

  return (
    <>
      <div className="justify-center items-center flex overflow-scroll fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto mx-auto max-w-[90%] items-center">
          {/*content*/}
          <div className="border-0 shadow-lg relative flex flex-col w-full bg-deep-blue outline-none focus:outline-none items-center">
            {/*header*/}
            <div className="flex justify-between p-5 w-full">
              <h3 className="text-xl font-raleway uppercase m-1">
                {title}
              </h3>
              <div className="ml-auto flex leading-none outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <BsXLg />
              </div>
            </div>
            {/*body*/}

            <div className="relative flex-auto m-3">
              {tags.map((tag) => {
                return (
                  <div
                    key={`${tag} ${title}`}
                    className="center relative inline-block select-none whitespace-nowrap m-0.5 
                  rounded-lg bg-red py-2 px-2 align-baseline font-sans text-xs font-bold 
                  uppercase leading-none text-white">
                    {tag}
                  </div>)
              })}
            </div>
            <div className='pb-5'>
              <a
                href={repoUrl} target='_blank' rel='noreferrer noopener'
                className="inline-flex overflow-hidden text-deep-blue bg-white rounded group my-3 shadow-sm min-w-fit">
                <span className="px-2.5 py-1 text-white bg-yellow group-hover:bg-dark-purple flex items-center justify-center">
                  <FaGithub />
                </span>
                <span className="pl-2 pr-2.5 py-1 text-xs uppercase">See the Code</span>
              </a>
            </div>
          </div>
        </div>
      </div><div className="opacity-25 fixed inset-0 z-40 bg-black"></div></>

  );
}