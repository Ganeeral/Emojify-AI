"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CloseIcon, HideIcon } from "@/ui/icons";
import cn from "classnames";
import Link from "next/link";
import "@/app/globals.css";

const RegistrPage: React.FC = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formIsValid, setFormIsValid] = useState(false);
  const [usernameExistsError, setUsernameExistsError] = useState("");
  const { push } = useRouter();

  const validateUsername = async () => {
    if (!login) {
      setUsernameError("Введите логин");
    } else if (!/^[a-zA-Z]+$/.test(login)) {
      setUsernameError("Логин может содержать только латинские буквы");
    } else {
      setUsernameError("");
      try {
        const response = await fetch("http://flixx/src/api/checkUsername.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ login }),
        });
        const data = await response.json();
        if (data.exists) {
          setUsernameExistsError("Имя пользователя уже существует");
        } else {
          setUsernameExistsError("");
        }
      } catch (error) {
        console.error("Username check error:", error);
      }
    }
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Введите пароль");
    } else if (password.length < 6) {
      setPasswordError("Пароль должен содержать не менее 6 символов");
    } else {
      setPasswordError("");
    }
  };


  const checkFormValidity = useCallback(() => {
    if (
      !usernameError &&
      !passwordError &&
      !usernameExistsError &&
      login &&
      password
    ) {
      setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
  }, [
    usernameError,
    passwordError,
    usernameExistsError,
    login,
    password,
  ]);

  useEffect(() => {
    checkFormValidity();
  }, [checkFormValidity]);

  const handleRegistration = async (e: React.FormEvent) => {
    e.preventDefault();
    await validateUsername();
    validatePassword();

    if (formIsValid) {
      try {
        const response = await fetch("http://flixx/src/api/register.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ login, password }),
        });

        const data = await response.json();
        if (response.ok) {
          toast.success(
            "Регистрация завершена! Перенаправление на страницу входа..."
          );
          setTimeout(() => {
            push("/auth");
          }, 0);
        } else {
          setUsernameExistsError(data.message);
        }
      } catch (error) {
        console.error("Registration error:", error);
      }
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  return (
    <div className="flex relative justify-center items-center">
      <div className="absolute clamp-Logo gradientText">
        Emojify AI
      </div>
      <div className="min-w-[300px] my-10 max-w-[670px] w-full flex flex-col gap-y-4 mx-2">
        <div className="rounded-[36px] backgroundAuth p-4 flex flex-col gap-y-8">
          <div className="relative flex justify-center ">
            {/* <Link className="mt-3" href="/">
              <EmojifyIcon />
            </Link> */}
            <div className="absolute right-0">
              <Link href="/">
                <CloseIcon />
              </Link>
            </div>
          </div>

          <form
            method="post"
            className={cn(
              "px-4 py-4 flex justify-center items-center flex-col border divide-solid rounded-3xl border-[#565656] gap-y-12",
              "mobile:px-10 flix:py-8",
              "tablet-s:px-14 tablet-s:py-10"
            )}
            onSubmit={handleRegistration}
          >
            <label className="text-center Inter font-bold text-display-1 mobile:text-display-2 text-searchText">
              Вход
            </label>
            <div className="flex flex-col gap-y-6 w-full">
              <div className="flex flex-col gap-y-3 max-w-[528px] w-full">
                <label className="text-searchText Inter font-bold text-lg leading-5">
                  Логин
                </label>
                <input
                  value={login}
                  onChange={handleUsernameChange}
                  onBlur={validateUsername}
                  type="text"
                  className={cn(
                    "border placeholder:text-searchText placeholder:text-base divide-solid border-[#666666] bg-inherit h-[56px] rounded-xl outline-none px-2 text-searchText text-xl w-full",
                    { "border-red-500": usernameError || usernameExistsError }
                  )}
                />
                {usernameError && (
                  <p className="text-red-500 text-xs">{usernameError}</p>
                )}
                {usernameExistsError && (
                  <p className="text-red-500 text-xs">{usernameExistsError}</p>
                )}
              </div>
              <div className="flex flex-col gap-y-3 max-w-[528px] w-full">
                <div className="flex justify-between w-full">
                  <label className="text-searchText Inter font-bold text-lg leading-5">
                    Пароль
                  </label>
                  <div className="cursor-pointer">
                    <HideIcon onClick={togglePasswordVisibility} />
                  </div>
                </div>
                <input
                  type={passwordVisible ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  onBlur={validatePassword}
                  className={cn(
                    "border placeholder:text-searchText placeholder:text-base divide-solid border-[#666666] bg-inherit h-[56px] rounded-xl outline-none px-2 text-searchText text-xl w-full",
                    { "border-red-500": passwordError }
                  )}
                />
                {passwordError && (
                  <p className="text-red-500 text-xs">{passwordError}</p>
                )}
              </div>
              <div className="flex flex-col gap-y-4">
                <button
                  type="submit"
                  className={cn(
                    "w-full Inter font-bold text-xl leading-5 rounded-[40px] p-5 bg-blacked text-white duration-300 hover:bg-searchText",
                    { "opacity-50 cursor-not-allowed": !formIsValid }
                  )}
                  disabled={!formIsValid}
                >
                  Войти
                </button>
                <p className="text-searchText Inter font-medium text-sm mobile:text-base text-center">
                  Продолжая, вы соглашаетесь с{" "}
                  <a
                    target="_blank"
                    href="privacy_policy.pdf"
                    className="text-[#d4d4d4] underline underline-offset-4"
                  >
                    Политикой конфиденциальности.
                  </a>
                </p>
              </div>
            </div>
          </form>
        </div>
        <Link href="/registration">
          <button className="w-full text-xl Inter font-bold leading-5 rounded-[40px] p-5 bg-blacked text-white duration-300 btn">
            Создать аккаунт
          </button>
        </Link>
        <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </div>
  );
};

export default RegistrPage;
