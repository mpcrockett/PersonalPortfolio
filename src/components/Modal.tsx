import { BsXLg } from 'react-icons/bs';

interface Props {
  title: string,
  description: string,
  repoUrl: string,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal(props: Props) {
  const { title, description, repoUrl, setShowModal } = props;

  return (
    <>
    <div className="justify-center items-center flex overflow-scroll fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative w-auto mx-auto max-w-[90%]">
        {/*content*/}
        <div className="border-0 shadow-lg relative flex flex-col w-full bg-deep-blue outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200">
            <h3 className="text-xl font-lora font-semibold">
              {title}
            </h3>
            <div className="p-1 ml-auto float-right leading-none outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <BsXLg />
            </div>
          </div>
          {/*body*/}

          <div className="relative flex-auto">
            <p className="m-4 text-white text-sm font-raleway max-h-[400px] overflow-scroll">
              {description}
            </p>
          </div> 
          <p className='text-red font-raleway uppercase text-sm font-bold m-4'>
					<a target='_blank' rel='noreferrer noopener' href={repoUrl}>
						See the code
					</a>
				</p>
        </div>
      </div>
    </div><div className="opacity-25 fixed inset-0 z-40 bg-black"></div></>
        
  );
}