"use client"

import MinimalBackground from "@/components/minimal-background"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { User, Mail, Lock, Bell, Shield } from "lucide-react"

export default function ProfilePage() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-start p-4 md:p-24 overflow-hidden">
      <MinimalBackground />

      <motion.div
        className="w-full max-w-3xl relative z-10 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-xl border border-gray-200 dark:border-gray-800 shadow-xl p-6 md:p-8">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Profile Settings</h1>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Manage your account preferences</p>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/4">
              <div className="sticky top-24">
                <div className="flex flex-col space-y-1">
                  <Button
                    variant="ghost"
                    className="justify-start gap-2 text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800"
                  >
                    <User className="w-4 h-4" />
                    <span>Personal Info</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Lock className="w-4 h-4" />
                    <span>Password</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Bell className="w-4 h-4" />
                    <span>Notifications</span>
                  </Button>
                  <Button
                    variant="ghost"
                    className="justify-start gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    <Shield className="w-4 h-4" />
                    <span>Privacy</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="md:w-3/4">
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Personal Information</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        defaultValue="John"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        defaultValue="Doe"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Username
                      </label>
                      <input
                        type="text"
                        defaultValue="johndoe"
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Display Name
                      </label>
                      <input
                        type="text"
                        defaultValue="John D."
                        className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Bio</label>
                    <textarea
                      rows={3}
                      defaultValue="Quiz enthusiast and knowledge seeker."
                      className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-500 focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-200 dark:border-gray-800">
                  <Button className="bg-gray-900 hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-200 dark:text-gray-900">
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  )
}
