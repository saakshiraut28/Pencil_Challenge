import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "/dash", current: false },
  { name: "Login", href: "/login", current: false },
  { name: "Settings", href: "/settings", current: false },
  { name: "Community", href: "/", current: false },
];

// getting values from local storage
const getDatafromLS = () => {
  const data = localStorage.getItem("Org");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  //main array of objects
  const [Org, setOrg] = useState(getDatafromLS());

  //User Input State
  const [communityName, setCommunityName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [communityLogo, setcommunityLogo] = useState("");
  const [profilePic, setprofilePic] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState();
  const [tagline, setTagline] = useState("");

  const handleOrgSubmit = (e) => {
    e.preventDefault();
    //create an obj
    let organization = {
      communityName,
      firstName,
      lastName,
      companyName,
      email,
      tagline,
      communityLogo,
      profilePic,
    };
    setOrg([organization]);
    setCommunityName("");
    setFirstName("");
    setLastName("");
    setCompanyName("");
    setEmail("");
    setTagline("");
    setcommunityLogo("");
    setprofilePic("");
    var element = document.getElementById("profile");
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
      const profile = String(reader.result);
      console.log(reader.result);
      sessionStorage.setItem("profile", profile);
    };
    reader.readAsDataURL(file);
  };

  //saving data to local storage
  useEffect(() => {
    localStorage.setItem("Org", JSON.stringify(Org));
  }, [Org]);

  return Org.map((organization) => (
    <Disclosure as="nav" className="bg-gray-100">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:pl-4 pr-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center lg:mr-2">
                  <a className="font-medium text-2xl" href="/">
                    Pensil{" "}
                    <span className="font-semibold">
                      🞨 {organization.communityName}
                    </span>
                  </a>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-blue-700 text-white"
                            : "text-gray-900 hover:bg-blue-600 hover:text-white transition duration-300",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-green-200 p-1 text-gray-600 hover:text-gray-800 transition duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={sessionStorage.getItem("logo")}
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/settings"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Account
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Billing
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="/"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-red-700 hover:bg-red-200 hover:text-red-600"
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-blue-700 text-white"
                      : "text-gray-800 hover:bg-blue-600 hover:text-white transition duration-300",
                    "block px-10 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  ));
}
